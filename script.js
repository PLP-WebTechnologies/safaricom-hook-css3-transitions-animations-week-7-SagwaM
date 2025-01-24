// Function to Calculate Rectangle Area
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Add Event Listener for Area Calculation
  document.getElementById("calculateArea").addEventListener("click", () => {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
  
    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
      const area = calculateRectangleArea(length, width);
      document.getElementById("areaResult").textContent = `The area is: ${area}`;
    } else {
      document.getElementById("areaResult").textContent = "Please enter valid positive numbers for length and width.";
    }
  });
  
  // Function Demonstrating Scope
  let globalVar = "I am a global variable";
  
  function demonstrateScope() {
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
  }
  
  demonstrateScope();
  // Uncomment the line below to test localVar scope error
  // console.log(localVar); // Unaccessible, will throw an error
  
  // Function to Toggle the Banner
  function toggleBanner() {
    const banner = document.querySelector(".banner");
    banner.classList.toggle("hidden");
  }
  
  // Function to Add Animation to the Banner
  function animateBanner() {
    const banner = document.querySelector(".banner");
    banner.classList.add("animated");
  
    // Reset animation to make it triggerable again
    banner.addEventListener("animationend", () => {
      banner.classList.remove("animated");
    });
  }
  
  // Add Event Listeners for Banner Functions
  document.getElementById("toggleBanner").addEventListener("click", toggleBanner);
  document.getElementById("animateButton").addEventListener("click", animateBanner);
  