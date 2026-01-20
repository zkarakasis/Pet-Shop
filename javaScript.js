      
            // carousel
            const track = document.getElementById("carouselTrack");
            const leftBtn = document.getElementById("leftBtn");
            const rightBtn = document.getElementById("rightBtn");

            const cardWidth = 230;
            const totalCards = document.querySelectorAll(".product-card").length;

            let index = 0;

            rightBtn.addEventListener("click", () => {
                index++;
                if(index > totalCards - 3){
                    index = 0;
                }
                track.style.transform = `translateX(-${index * cardWidth}px)`;
            });

            leftBtn.addEventListener("click", () => {
                index--;
                if(index < 0){
                    index = totalCards - 3;
                }
                track.style.transform = `translateX(-${index * cardWidth}px)`;
            });

            //shopping cart
            function getTotal(){
                return Number(localStorage.getItem("cartTotal")) || 0;
            }

            function setTotal(value){
                localStorage.setItem("cartTotal", value);
            }

            function addToCart(price){
                let total = getTotal();
                total += price;
                setTotal(total);
                updateCart();
            }

            function resetCart(){
                setTotal(0);
                updateCart();
            }    

            function updateCart(){
                document.getElementById("cartTotal").innerText = getTotal() + "€";
            }

            updateCart();

            //searchbox  (Need to create results with every single item/ pet we are selling, the ones bellow are placeholders)
            const pages = [
                { name: "Dog", page: "dogs.html" },
                { name: "Cat", page: "cats.html" },
                { name: "Parrot", page: "parrot.html" },
                { name: "Fish", page: "fish.html" },
                { name: "Hamster", page: "hamster.html" },
                { name: "Rabbit", page: "rabbit.html" }
            ];

            const input = document.getElementById("searchInput");
            const resultsBox = document.getElementById("searchResults");

            input.addEventListener("input", () => {
                const value = input.value.toLowerCase();
                resultsBox.innerHTML = "";

                if(value === "") return;

                pages.forEach(item => {
                    if(item.name.toLowerCase().includes(value)){
                        const div = document.createElement("div");
                        div.innerText = item.name;

                        div.onclick = () => {
                            window.location.href = item.page;
                        };

                        resultsBox.appendChild(div);
                    }
                });
            });




            const holders = document.querySelectorAll(".image-holder");
            holders.forEach(holder => {
                const dropdetails = holder.querySelector(".dropdetails");
                let hovering = false;
                
                holder.addEventListener("mouseenter", function(){
                    hovering = true;
                });
                
                holder.addEventListener("mouseleave", function(){
                    hovering = false;
                });
                
                holder.addEventListener("mousemove", function(moving){
                    if(hovering){
                        dropdetails.style.left = (moving.clientX + 10) + "px";
                        dropdetails.style.top = (moving.clientY + 10) + "px";
                    }
                });
            });
         

    
