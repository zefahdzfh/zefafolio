const scriptURL = 'https://script.google.com/macros/s/AKfycbyLCNk02d2a_ai9Oza-sJlzjqWaTDiuC5Cip6yvWL5uy1oT5F0Qdcu2qCs_x4iqtTT0/exec'
        const form = document.forms['contact-us']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    form.reset()
                    alert("Your Message send succesfully ")
                    console.log('Success!', response)
                })
                .catch(error => console.error('Error!', error.message))
        })

        
        // const mainMenu = document.querySelector('.mainMenu');
        // const closeMenu = document.querySelector('.closeMenu');
        // const openMenu = document.querySelector('.openMenu');
        // const menu_items = document.querySelectorAll('nav .mainMenu li a');
        
        
        
        
        // openMenu.addEventListener('click',show);
        // closeMenu.addEventListener('click',close);
        
        // // close menu when you click on a menu item 
        // menu_items.forEach(item => {
        //     item.addEventListener('click',function(){
        //         close();
        //     })
        // })
        
        // function show(){
        //     mainMenu.style.display = 'flex';
        //     mainMenu.style.top = '0';
        // }
        // function close(){
        //     mainMenu.style.top = '-100%';
        // }