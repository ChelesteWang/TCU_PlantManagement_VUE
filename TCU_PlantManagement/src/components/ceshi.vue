<template>
    <body>
        <div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button class="btn btn-info waves-effect waves-light btn-sm" id="sa-close" @click="timer()">Click me</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>

</template>

<script>
export default {
  methods: {
    timer: function() {
      swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    }
  }
};
</script>

<style scoped>
</style>
