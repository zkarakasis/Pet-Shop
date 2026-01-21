      
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
                { name: "Abyssinian", page: "abyssinian.html" },
                { name: "American Shorthair", page: "american_shorthair.html" },
                { name: "Exotic Shorthair", page: "exotic_shorthair.html" },
                { name: "Maine Coon", page: "Maine_coon.html" },
                { name: "Norwegian Forest Cat", page: "norwegian_forest-cat.html" },
                { name: "Oriental Shorthair", page: "oriental_shorthair.html" },
                { name: "Persian", page: "persian.html" },
                { name: "Siamese", page: "siamese.html" },
                { name: "Turkish Angora", page: "turkish_angora.html" },
                { name: "Axolotl", page: "Axolotl.html" },
                { name: "Bat-eared", page: "Bat-eared.html" },
                { name: "Capybara", page: "capybara.html" },
                { name: "Chameleon", page: "Chameleon.html" },
                { name: "Chinchilla", page: "Chinchilla.html" },
                { name: "fennec", page: "fennec.html" },
                { name: "Kinkajou", page: "Kinkajou.html" },
                { name: "Opossum", page: "Opossum.html" },
                { name: "Porcupine", page: "Porcupine.html" },
                { name: "Raccoon", page: "Raccoon.html" },
                { name: "Spotted Genet", page: "SpottedGenet.html" },
                { name: "Sugar Glider", page: "SugarGlider.html" },
                { name: "Voyage Rucksack", page: "backpack.html" },
                { name: "Ferplast Piano 6 Bird Cage", page: "birdcage.html" },
                { name: "JR Birds Individual Cockatiel Food", page: "birdfood.html" },
                { name: "Relax Radiator Bed", page: "catbed.html" },
                { name: "Little Fish Plastic Cat Bowls", page: "catbowl.html" },
                { name: "This Royal Canin Indoor", page: "catfood.html" },
                { name: "Royal Canin Training Treats", page: "dogfood.html" },
                { name: "Rubber Chicken Dog Toy", page: "dogtoy.html" },
                { name: "TetraPro Energy Multi-Crisp", page: "fishfood.html" },
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
        
    