setTimeout(() => {
    var t2 = document.querySelectorAll('.title.style-scope.ytd-video-primary-info-renderer')
    if(t2)
    {
        if(t2.length == 1)
        {
            document.head.innerHTML += '<style>::-webkit-scrollbar{width: 1.2rem;}::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey;border-radius: 10px;}::-webkit-scrollbar-thumb{background: grey;border-radius: 10px;}::-webkit-scrollbar-thumb:hover{background: #000;}</style>'
            document.querySelectorAll('.style-scope.ytd-watch-flexy')[8].style.display = 'flex'
            document.getElementById('primary').style.flex = "1"
            document.getElementById('primary').style.marginLeft = "-15rem"
            document.querySelectorAll('.style-scope.ytd-watch-flexy')[11].style.resize = "horizontal"
            document.querySelectorAll('.style-scope.ytd-watch-flexy')[11].style.overflow = "auto"
            document.querySelectorAll('.style-scope.ytd-watch-flexy')[11].style.minWidth = "50rem"
            document.querySelectorAll('.style-scope.ytd-watch-flexy')[11].style.padding = "1rem"
            
            console.log(t2.length)
            console.log(t2[0].innerText)
            var t1 = t2[0].innerText
            if(t1.includes("c++") == true || t1.includes("C++") == true || t1.includes("c++") == true || t1.includes("cpp") == true || t1.includes("Cpp") == true|| t1.includes("CPP") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/online-compiler-c++/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML        
            }
            else if(t1.includes("python") == true || t1.includes("Python") == true || t1.includes("PYTHON") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/python3-programming-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("php") == true || t1.includes("PHP") == true || t1.includes("Php") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/php-online-editor/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("ruby") == true || t1.includes("Ruby") == true || t1.includes("RUBY") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-ruby-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("perl") == true || t1.includes("Perl") == true || t1.includes("PERL") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-perl-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("PASCAL") == true || t1.includes("Pascal") == true || t1.includes("pascal") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-pascal-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            
            else if(t1.includes("FORTRAN") == true || t1.includes("Fortran") == true || t1.includes("fortran") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-fortran-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("HASKELL") == true || t1.includes("Haskell") == true || t1.includes("haskell") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-haskell-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("Assembly(GCC)") == true || t1.includes("Assembly(gcc)") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/compile-assembler-gcc-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("Objective C") == true || t1.includes("objective C") == true || t1.includes("objectiveC") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-objective-c-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("SQL") == true || t1.includes("sql") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-sql-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("Prolog") == true || t1.includes("PROLOG") == true || t1.includes("prolog") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-prolog-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("SWIFT") == true || t1.includes("Swift") == true || t1.includes("swift") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-swift-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                         
            }
            else if(t1.includes("RUST") == true || t1.includes("Rust") == true || t1.includes("rust") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-rust-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes(" R") == true || t1.includes("R ") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-r-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("GO") == true || t1.includes("Go") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/execute-go-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML        
            }
            else if(t1.includes("BASH") == true || t1.includes("Bash") == true || t1.includes("bash") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/test-bash-shell-script-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                 
                
            }
            else if(t1.includes("html") == true || t1.includes("HTML") == true || t1.includes("Html") == true || t1.includes("css") == true || t1.includes("Css") == true || t1.includes("CSS") == true || t1.includes("JS") == true || t1.includes("Js") == true || t1.includes("js") == true ||  t1.includes("javascript") == true || t1.includes("java script") == true || t1.includes("Javascript") == true || t1.includes("Java script") == true || t1.includes("JavaScript") == true || t1.includes("JavaScript") == true || t1.includes("JAVASCRIPT") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/html-css-javascript-online-editor/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("java") == true || t1.includes("Java") == true || t1.includes("JAVA") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/online-java-compiler/" id="java_frame" frameborder="0" style="min-width: 20rem;resize: both;overflow: auto;height: 48rem;padding:1rem;"></iframe>';
            }
            else if(t1.includes("VB") == true || t1.includes("Vb") == true || t1.includes("vb") == true || t1.includes(".net") == true || t1.includes(".Net")==true || t1.includes(".NET") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/compile-vb-dot-net-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("c#") == true || t1.includes("C#") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/compile-c-sharp-online/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes(" C") == true || t1.includes("C ") == true || t1.includes("c ") == true) 
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/c-online-compiler/" frameborder="0" style="min-width: 55rem;resize: horizontal;overflow: auto;;height: 48rem;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }   
        }
    }
}, 5000);

