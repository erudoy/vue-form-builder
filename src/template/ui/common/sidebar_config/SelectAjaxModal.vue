<template>
    <div class="modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Выбор источника данных</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <p>Ajax-запрос с данного URL-адреса должен возвращать строку в формате JSON:</p>
                    <pre><code>{{demoData}}</code></pre>
                    <p>Либо в данном виде:</p>
                    <pre><code>{{demoData2}}</code></pre>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "select-ajax-modal",
        data: () => ({
            demoData: ['choice1', 'choice2', 'choice3'],
            demoData2: [
                {id: 1, text: "Категория 1"},
                {id: 2, text: "Категория 2"},
            ],
            modal: null,
        }),
        methods: {
            openModal() {
                this.modal.modal('show');
            },
        },
        mounted() {
            this.modal = $(this.$el);
        }
    }
</script>

<style scoped>
    pre {
        background-color: black;
        color: white;
        padding: 10px;
    }
</style>
