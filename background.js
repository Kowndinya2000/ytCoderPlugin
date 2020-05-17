setTimeout(() => {
    var t2 = document.querySelectorAll('.title.style-scope.ytd-video-primary-info-renderer')
    if(t2)
    {
        if(t2.length == 1)
        {
            document.querySelectorAll('.style-scope.ytd-watch-flexy')[8].style.display = 'flex'
            document.getElementById('primary').style.flex = "1"
            var height = document.getElementById('primary').style.height;
            document.getElementById('secondary').style.flex = "1"

            console.log(t2.length)
            console.log(t2[0].innerText)
            var t1 = t2[0].innerText
            var button_code  = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"><script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script><link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"><div style="margin: 1rem;text-align: center;"><button type="button" class="btn btn-danger" id="button_id"  style="background:#CE3C23;font-family: \'Ubuntu\', sans-serif;font-size:1.5rem;">Extract Code</button></div><div class="form-group shadow-textarea" id="code" style="display: none;margin: 1rem 0.5rem;width:25rem !important;"><label for="exampleFormControlTextarea6">Extracted Code</label><textarea style="width:25rem !important;" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="15" placeholder=""></textarea></div>'
            if(t1.includes("c++") == true || t1.includes("C++") == true || t1.includes("c++") == true || t1.includes("cpp") == true || t1.includes("Cpp") == true|| t1.includes("CPP") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.jdoodle.com/online-compiler-c++/" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML        
            }
            else if(t1.includes("python") == true || t1.includes("Python") == true || t1.includes("PYTHON") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.jdoodle.com/python3-programming-online/" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("php") == true || t1.includes("PHP") == true || t1.includes("Php") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_php_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("ruby") == true || t1.includes("Ruby") == true || t1.includes("RUBY") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_ruby_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("perl") == true || t1.includes("Perl") == true || t1.includes("PERL") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_perl_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("PASCAL") == true || t1.includes("Pascal") == true || t1.includes("pascal") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_pascal_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            
            else if(t1.includes("FORTRAN") == true || t1.includes("Fortran") == true || t1.includes("fortran") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_fortran_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("HASKELL") == true || t1.includes("Haskell") == true || t1.includes("haskell") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_haskell_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("Assembly(GCC)") == true || t1.includes("Assembly(gcc)") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_gcc_assembler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("Objective C") == true || t1.includes("objective C") == true || t1.includes("objectiveC") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_objectivec_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("SQLite") == true || t1.includes("sqlite") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_sqlite_editor" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("Prolog") == true || t1.includes("PROLOG") == true || t1.includes("prolog") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_prolog_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("SWIFT") == true || t1.includes("Swift") == true || t1.includes("swift") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_swift_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                         
            }
            else if(t1.includes("RUST") == true || t1.includes("Rust") == true || t1.includes("rust") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_rust_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes(" R") == true || t1.includes("R ") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_r_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML         
            }
            else if(t1.includes("GO") == true || t1.includes("Go") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_go_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML        
            }
            else if(t1.includes("BASH") == true || t1.includes("Bash") == true || t1.includes("bash") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_bash_shell" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                 
                
            }
            else if(t1.includes("html") == true || t1.includes("HTML") == true || t1.includes("Html") == true || t1.includes("css") == true || t1.includes("Css") == true || t1.includes("CSS") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_html_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("JS") == true || t1.includes("Js") == true || t1.includes("js") == true ||  t1.includes("javascript") == true || t1.includes("java script") == true || t1.includes("Javascript") == true || t1.includes("Java script") == true || t1.includes("JavaScript") == true || t1.includes("JavaScript") == true || t1.includes("JAVASCRIPT") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_javascript_rhino_interpreter" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("java") == true || t1.includes("Java") == true || t1.includes("JAVA") == true)
            {
                document.getElementById('secondary').innerHTML =   '<iframe src="https://www.jdoodle.com/embed/v0/24TF" id="java_frame" frameborder="0" style="width: 100%;height: 80rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("VB") == true || t1.includes("Vb") == true || t1.includes("vb") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_vb_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes("c#") == true || t1.includes("C#") == true)
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.jdoodle.com/compile-c-sharp-online/" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            else if(t1.includes(" C") == true || t1.includes("C ") == true) 
            {
                document.getElementById('secondary').innerHTML =  button_code  + '<iframe src="https://www.onlinegdb.com/online_c_compiler" frameborder="0" style="width: 100%;height: 60rem;border-color: blue;border: 2px solid blue;"></iframe>';
                document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML = button_code + document.querySelectorAll('.style-scope.ytd-video-primary-info-renderer')[8].innerHTML
            }
            var button_object = document.getElementById('button_id')
            button_object.onclick = function () {
                console.log('heyy');
                var button_play = document.querySelectorAll(".ytp-play-button.ytp-button");
                if(button_play)
                {
                    if(button_play.length == 1)
                    {
                        console.log("hi");
                        button_play[0].click();
                        var timeStamp = document.querySelectorAll('.ytp-time-current')[0].innerHTML
                        var inp1 = window.location.href;
                        var inp2 = timeStamp.split(":")
                        var a1 = parseInt(inp2[1])
                        var a2 = a1 + (parseInt(inp2[0])*60.0)  
                        console.log(inp1)
                        console.log(a2)  
                        var xhttp = new XMLHttpRequest()
                            xhttp.onreadystatechange = function () 
                            {
                              if(this.readyState == 4 && this.status == 200)
                              {
                                var result = []; 
                                result = JSON.parse(this.responseText).message;
                                document.getElementById('code').style.display = 'block'
                                for(var i=0;i<result.length-1;i++)
                                {
                                  if(result[i].length == 0)
                                  {
                                    //do nothing
                                  }
                                  else if((result[i].match(/\s/g) || []).length == result[i].length)
                                  {
                                    //do nothing
                                  }
                                  else 
                                  {
                                    document.getElementById('exampleFormControlTextarea6').value += result[i] + "\n" 
                                  }
                                }
                                console.log(result)
                              }      
                            }
                            xhttp.open("POST","https://ytcoder.herokuapp.com",true)
                            xhttp.setRequestHeader('Content-type',"application/x-www-form-urlencoded")
                            var url = inp1 + "--" + a2
                            xhttp.send('link='+url)
                        
                    }
                }
            }    
        }
    }
}, 3000);

