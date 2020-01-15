<template>
    <div class="header">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">静岡県点群データマップ</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="https://pointcloud.pref.shizuoka.jp/">Shizuoka Point Cloud DB</b-nav-item>
                    <b-nav-item href="#" v-b-modal.modal-about>about</b-nav-item>
                    <b-modal id="modal-about" title="about" hide-footer>
                        <p class="my-4">
                            このサイトは、静岡県が運営する<a href="https://pointcloud.pref.shizuoka.jp/">Shizuoka Point Cloud DB</a>で
                            公開されている貴重なデータを、より探しやすくする事を目的に開発されました。
                            ご意見・お問い合わせは<a href="https://twitter.com/kanahiro_iguchi">開発者のTwitterアカウント</a>までどうぞ。
                        </p>
                    </b-modal>
                    <b-nav-item href="#" v-b-modal.modal-license>license</b-nav-item>
                    <b-modal id="modal-license" title="license" hide-footer>
                        <div class="my-4">
                            <div>
                                <p>
                                    <a href="https://pointcloud.pref.shizuoka.jp/">Shizuoka Point Cloud DB</a>の利用規約のとおり、
                                    ダウンロードしたデータを利用する際は、以下のようにクレジットを表示する必要があります。
                                </p>
                                <b>
                                    <p>
                                        この作品(注:作成するコンテンツに応じ、適宜、「アプリ」、「データベース」等と修正してください。)は、
                                        以下の著作物を改変して利用しています。
                                    </p>
                                    <p>
                                        【出典：静岡県ポイントクラウドデータベース】
                                        <a href='https://creativecommons.org/licenses/by/4.0/legalcode.ja'>CCライセンス 表示 4.0 国際</a>
                                    </p>
                                </b>
                            </div>
                        </div>
                    </b-modal>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
</style>