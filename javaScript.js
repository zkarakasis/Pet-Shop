      
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
                { name: "Abyssinian", page: "Cat Product Page/Cat Gallery/abyssinian.html" },
                { name: "American Shorthair", page: "Cat Product Page/Cat Gallery/american_shorthair.html" },
                { name: "Exotic Shorthair", page: "Cat Product Page/Cat Gallery/exotic_shorthair.html" },
                { name: "Maine Coon", page: "Cat Product Page/Cat Gallery/Maine_coon.html" },
                { name: "Norwegian Forest Cat", page: "Cat Product Page/Cat Gallery/norwegian_forest-cat.html" },
                { name: "Oriental Shorthair", page: "Cat Product Page/Cat Gallery/oriental_shorthair.html" },
                { name: "Persian", page: "Cat Product Page/Cat Gallery/persian.html" },
                { name: "Siamese", page: "Cat Product Page/Cat Gallery/siamese.html" },
                { name: "Turkish Angora", page: "Cat Product Page/Cat Gallery/turkish_angora.html" },
                { name: "Axolotl", page: "exotic animals/Axolotl.html" },
                { name: "Bat-eared", page: "exotic animals/Bat-eared.html" },
                { name: "Capybara", page: "exotic animals/capybara.html" },
                { name: "Chameleon", page: "exotic animals/Chameleon.html" },
                { name: "Chinchilla", page: "exotic animals/Chinchilla.html" },
                { name: "fennec", page: "exotic animals/fennec.html" },
                { name: "Kinkajou", page: "exotic animals/Kinkajou.html" },
                { name: "Opossum", page: "exotic animals/Opossum.html" },
                { name: "Porcupine", page: "exotic animals/Porcupine.html" },
                { name: "Raccoon", page: "exotic animals/Raccoon.html" },
                { name: "Spotted Genet", page: "exotic animals/SpottedGenet.html" },
                { name: "Sugar Glider", page: "exotic animals/SugarGlider.html" },
                { name: "Voyage Rucksack", page: "Products/backpack.html" },
                { name: "Ferplast Piano 6 Bird Cage", page: "Products/birdcage.html" },
                { name: "JR Birds Individual Cockatiel Food", page: "Products/birdfood.html" },
                { name: "Relax Radiator Bed", page: "Products/catbed.html" },
                { name: "Little Fish Plastic Cat Bowls", page: "Products/catbowl.html" },
                { name: "This Royal Canin Indoor", page: "Products/catfood.html" },
                { name: "Royal Canin Training Treats", page: "Products/dogfood.html" },
                { name: "Rubber Chicken Dog Toy", page: "Products/dogtoy.html" },
                { name: "TetraPro Energy Multi-Crisp", page: "Products/fishfood.html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
                { name: "", page: ".html" },
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
        
    