from flask import Flask, request, jsonify, render_template

app = Flask(__name__, static_folder='./vue/dist/static', template_folder='./vue/dist')

@app.route('/')
def index():
	return render_template('index.html')

import urllib.request, urllib.parse
import json
@app.route('/markers')
def getMarkers():

    #全件取得ではない場合はパラメータを取得してAPIにアクセス
    '''
    xMax = request.args.get('xMax')
    xMin = request.args.get('xMin')
    yMax = request.args.get('yMax')
    yMin = request.args.get('yMin')
    '''

    #全件取得するために、静岡県全域が含まれる緯度経度を整数値で設定
    xMax = 140
    xMin = 137
    yMax = 36
    yMin = 33

    params = {
        'request':'MarkerSet',
        'Xmax':xMax,
        'Xmin':xMin,
        'Ymax':yMax,
        'Ymin':yMin
    }
    p = urllib.parse.urlencode(params)

    url = "https://pointcloud.pref.shizuoka.jp/lasmap/ankenmapsrc?" + p
    print(url)

    #上記で生成したURLパラメータでSIZUOKA POINT CLOUD DBにリクエストし案件一覧文字列を取得
    allAnkenStr = ""
    with urllib.request.urlopen(url) as res:
        allAnkenStr = res.read().decode()

    #以下はDBから得られる文字列のサンプル
    #本来は改行されていない

    #30XXX01010001:平成30年度韮山反射炉計測業務:138.96214537214:35.03962001009?
    #28XXX00030007:白糸の滝滝見橋周辺整備事業　その７:138.58870495572:35.312506370532?
    #28XXX00030008:白糸の滝滝見橋周辺整備事業　その８:138.58881502806:35.312596432406?
    #28XXX00030009:白糸の滝滝見橋周辺整備事業　その９:138.58892510063:35.312686494178?
    #29C2001011361:平成２９年度［第２９-Ｃ２００１-０１号］　伊豆半島の屋外広告物の実態調査業務委託（函南町道_1-2号線）:138.93794860595:35.083520492945

    #案件ごとの区切りは'?'、1案件中の区切りは':'である
    #取得した文字列をパースしてjsonとしてreturnする
    ankensObj = {
        "ankenList":[]
    }

    ankenList = allAnkenStr.split('?')
    for anken in ankenList:
        ankenInfo = anken.split(':')
        #不適切なデータがあった場合、スキップする
        if len(ankenInfo) != 4:
            continue
        ankenObj = {
            "no":ankenInfo[0],
            "name":ankenInfo[1],
            "lon":ankenInfo[2],
            "lat":ankenInfo[3]
        }
        ankensObj['ankenList'].append(ankenObj)
    return jsonify(ankensObj)

@app.route('/ankenDetail/<ankenno>')
def getApi(ankenno):
    params = {
        'ankenno':ankenno
    }
    p = urllib.parse.urlencode(params)
    url = "https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?" + p

    with urllib.request.urlopen(url) as res:
        html = res.read().decode().replace(r"\n","")
        jsonData = json.loads(html)
        return jsonify(jsonData)

if __name__ == "__main__":
    app.run()