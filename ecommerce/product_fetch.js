const clothingData = [
    { 
      imgSrc: "img/elliptical_trainer.png", 
      name: "Elliptical Trainer", 
      price: "$ 299.99", 
      gender: "Unisex", 
      color: "rosybrown" 
    },
    { 
      imgSrc: "img/threadmill.png", 
      name: "Threadmill", 
      price: "$ 359.99", 
      gender: "Unisex", 
      color: "#e3e3ef" 
    },
    { 
      imgSrc: "img/dip_bar1.png", 
      name: "Dip Bar", 
      price: "$ 49.99", 
      gender: "Unisex", 
      color: "#000" 
    },
    { 
      imgSrc: "img/kettlebell.png", 
      name: "Kettlebell Weight", 
      price: "$ 30.49", 
      gender: "Male", 
      color: "darkgrey" 
    },
    { 
      imgSrc: "img/elliptical_trainer2.png", 
      name: "Elliptical Trainer", 
      price: "$ 239.99", 
      gender: "Male", 
      color: "sandybrown" 
    },
    { 
      imgSrc: "img/stabilityball2.png", 
      name: "Stability Ball", 
      price: "$ 65.49", 
      gender: "Unisex", 
      color: "powderblue" 
    },
    { 
      imgSrc: "img/foam_roller.png", 
      name: "Foam Roller", 
      price: "$ 65.49", 
      gender: "Unisex", 
      color: "#e3e3ef" 
    },
    { 
      imgSrc: "img/kettlebell2.png", 
      name: "Kettlebell", 
      price: "$ 105.99", 
      gender: "Unisex", 
      color: "powderblue" 
    },
    { 
      imgSrc: "img/multifunction2.png", 
      name: "Multifunctional Gym Machine", 
      price: "$ 375.99", 
      gender: "Female", 
      color: "deeppink" 
    },
    { 
      imgSrc: "img/stabilityball.png", 
      name: "Stability Ball", 
      price: "$ 95.99", 
      gender: "Male", 
      color: "lightblue" 
    },
    { 
      imgSrc: "img/dip_bar2.png", 
      name: "Dip Bar", 
      price: "$ 154.99", 
      gender: "Male", 
      color: "blue" 
    },
    { 
      imgSrc: "img/weightbench.png", 
      name: "Foldable Bench Press", 
      price: "$ 75.99", 
      gender: "Female", 
      color: "cyan" 
    },
    { 
      imgSrc: "img/pushup_bar.png", 
      name: "Push-up Bar", 
      price: "$ 75.99", 
      gender: "Female", 
      color: "deeppink" 
    },
    { 
      imgSrc: "img/dumbbell.png", 
      name: "Dumbbell", 
      price: "$ 154.99", 
      gender: "Male", 
      color: "blue" 
    },
    { 
      imgSrc: "img/multifunctional.png", 
      name: "Multifunctional Smith Machine", 
      price: "$ 375.99", 
      gender: "Female", 
      color: "cyan" 
    }
    // Add more clothing items as needed
  ];
  

// Function to generate clothing cards dynamically
function generateClothingCards() {
    const clothesSection = document.getElementById("clothes");
  
    // Loop through the clothing data and create cards
    clothingData.forEach(item => {
      const clothingCard = document.createElement("div");
      clothingCard.classList.add("clothing-card");
  
      clothingCard.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <span>Gender: ${item.gender}</span>
        <span>Color: <span class="color-circle" style="background-color: ${item.color};"></span></span><br />
        <a href="#" class="btn" onclick="addItemToCart(this)">Add to Cart</a>
      `;
  
      clothesSection.appendChild(clothingCard);
    });
  }
  
  // Call the function to generate clothing cards when the page loads
  window.onload = generateClothingCards;