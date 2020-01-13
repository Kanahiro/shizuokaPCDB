<template>
    <div class="header">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">静岡県点群オープンデータマップ</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="https://pointcloud.pref.shizuoka.jp/">Shizuoka Point Cloud DB</b-nav-item>
                    <b-nav-item href="#" v-b-modal.modal-about>about</b-nav-item>
                    <b-modal id="modal-about" title="about" hide-footer>
                        <p class="my-4">
                            このサイトは、静岡県が運営する<a href="https://pointcloud.pref.shizuoka.jp/">Shizuoka Point Cloud DB</a>で
                            公開されているデータを探しやすくする事を目的に開発されました。
                            ご意見・お問い合わせは<a href="https://twitter.com/kanahiro_iguchi">Twitterアカウント</a>までどうぞ。
                        </p>
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