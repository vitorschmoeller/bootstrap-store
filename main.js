
        $(document).ready(function() {
            const ativadorToast = document.getElementById('btn-checar-emails')
        const mensagem = document.getElementById('mensagens-alerta')
        
        if (ativadorToast) {
            ativadorToast.addEventListener('click', function(){
                const toast = new bootstrap.Toast(mensagem)
                toast.show()
            })

            
        }
        $('#telefone').mask('(00) 00000-0000', {
                placeholder: 'Exemplo: (81) 98946-7729'
            })

        $('form').validate({
            rule: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                }
            }
        })
    })
        