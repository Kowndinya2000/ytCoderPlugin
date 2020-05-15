setTimeout(() => {
    var t2 = document.querySelectorAll('.title.style-scope.ytd-video-primary-info-renderer')
    if(t2)
    {
        if(t2.length == 1)
        {
            console.log(t2.length)
            console.log(t2[0].innerText)
            var t1 = t2[0].innerText
            if(t1.includes("c++") == true || t1.includes("C++") == true || t1.includes("c++") == true || t1.includes("cpp") == true || t1.includes("Cpp") == true|| t1.includes("CPP") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_c++_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';        
            }
            else if(t1.includes("python") == true || t1.includes("Python") == true || t1.includes("PYTHON") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_python_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
            }
            else if(t1.includes("php") == true || t1.includes("PHP") == true || t1.includes("Php") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_php_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("ruby") == true || t1.includes("Ruby") == true || t1.includes("RUBY") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_ruby_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("perl") == true || t1.includes("Perl") == true || t1.includes("PERL") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_perl_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("PASCAL") == true || t1.includes("Pascal") == true || t1.includes("pascal") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_pascal_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            
            else if(t1.includes("FORTRAN") == true || t1.includes("Fortran") == true || t1.includes("fortran") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_fortran_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("HASKELL") == true || t1.includes("Haskell") == true || t1.includes("haskell") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_haskell_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("Assembly(GCC)") == true || t1.includes("Assembly(gcc)") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_gcc_assembler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("Objective C") == true || t1.includes("objective C") == true || t1.includes("objectiveC") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_objectivec_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("SQLite") == true || t1.includes("sqlite") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_sqlite_editor" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("Prolog") == true || t1.includes("PROLOG") == true || t1.includes("prolog") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_prolog_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("SWIFT") == true || t1.includes("Swift") == true || t1.includes("swift") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_swift_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("RUST") == true || t1.includes("Rust") == true || t1.includes("rust") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_rust_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes(" R") == true || t1.includes("R ") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_r_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("GO") == true || t1.includes("Go") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_go_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';         
            }
            else if(t1.includes("BASH") == true || t1.includes("Bash") == true || t1.includes("bash") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_bash_shell" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
                
            }
            else if(t1.includes("html") == true || t1.includes("HTML") == true || t1.includes("Html") == true || t1.includes("css") == true || t1.includes("Css") == true || t1.includes("CSS") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_html_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
            }
            else if(t1.includes("JS") == true || t1.includes("Js") == true || t1.includes("js") == true ||  t1.includes("javascript") == true || t1.includes("java script") == true || t1.includes("Javascript") == true || t1.includes("Java script") == true || t1.includes("JavaScript") == true || t1.includes("JavaScript") == true || t1.includes("JAVASCRIPT") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_javascript_rhino_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
            }
            else if(t1.includes("java") == true || t1.includes("Java") == true || t1.includes("JAVA") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_java_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
            }
            else if(t1.includes("VB") == true || t1.includes("Vb") == true || t1.includes("vb") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_vb_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
            }
            else if(t1.includes("c#") == true || t1.includes("C#") == true)
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_csharp_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem'; 
            }
            else if(t1.includes(" C") == true || t1.includes("C ") == true) 
            {
                document.getElementById('secondary').innerHTML =  '<iframe src="https://www.onlinegdb.com/online_c_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.getElementById('primary').style.width = '160rem';
            }

            var button_play = document.querySelectorAll('.ytp-play-button.ytp-button')
            if(button_play)
            {
                if(button_play.length == 1)
                {
                    var state = button_play[0].title 
                    console.log(state)
                    button_play[0].innerHTML += '<p onclick="f1()">Heyy</p>'
                    setInterval(() => {
                        if(document.querySelectorAll('.ytp-play-button.ytp-button')[0].title.includes("Play"))
                        {
                            var timeStamp = document.querySelectorAll('.ytp-time-current')[0].innerHTML
                            console.log(timeStamp)
                            
                        }
                    }, 1000);
                   
                }
            }
        }
    }


}, 3000);

