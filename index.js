//let bg = document.querySelectorAll("#win-bg, #amag-bg, #selection-bg, #edit-bg, #shadow-bg, #assets-bg, #wire-bg, #filter-bg, #file-bg, #save-bg, #visibility-bg");
//let logo = document.querySelectorAll("#window-logo, #amag-logo, #select-logo, #edit-logo, #shadow-logo, #assets-logo, #wire-logo, #filter-logo, #file-logo, #save-logo, #visible-logo");

let logo_btns = ["#window-logo", "#amag-logo", "#select-logo", "#edit-logo", "#shadow-logo", "#assets-logo", "#wire-logo", "#filter-logo", "#file-logo", "#save-logo", "#visible-logo"]
let bg_btns = ["#win-bg", "#amag-bg", "#selection-bg", "#edit-bg", "#shadow-bg", "#assets-bg", "#wire-bg", "#filter-bg", "#file-bg", "#save-bg", "#visibility-bg"]
let textmenu = ["#window-textmenu", "#amag-textmenu", "#select-textmenu", "#edit-textmenu", "#shadow-textmenu", "#assets-textmenu", "#wire-textmenu", "#filter-textmenu", "#file-textmenu"]
let mouseover_BG_color = "#35353f"
let mouseover_logo_color = "#ffffff"

//colors on mouse hover over the elements, then return back to its original color on mouse out
for(let countElements = 0; countElements < 11; countElements++) {
  let ball_logo = document.querySelector(logo_btns[countElements]);
  let ball_bg = document.querySelector(bg_btns[countElements]);
  //mouseover --
  ball_logo.addEventListener("mouseover", function() {
    // Select all child elements
    const childElements = ball_logo.querySelectorAll("*");
    ball_logo.style.fill = mouseover_logo_color; //color logo if it one part without any child elements
    ball_bg.style.fill = mouseover_BG_color;   //color bg
    // Loop through each child element and set its fill to white
    childElements.forEach(child => {
      ball_bg.style.fill = mouseover_BG_color;
      child.style.fill = mouseover_logo_color;
    });
  });
  ball_bg.addEventListener("mouseover", function() {
    // Select all child elements
    const childElements = ball_logo.querySelectorAll("*");
    ball_logo.style.fill = mouseover_logo_color; //color logo if it one part without any child elements
    ball_bg.style.fill = mouseover_BG_color;   //color bg
    // Loop through each child element and set its fill to white
    childElements.forEach(child => {
      ball_bg.style.fill = mouseover_BG_color;
      child.style.fill = mouseover_logo_color;
    });
  })
  //mouseout --
  ball_logo.addEventListener("mouseout", function() {
    // Select all child elements
    const childElements = ball_logo.querySelectorAll("*");
    ball_logo.style.fill = ""; //color logo if it one part without any child elements
    ball_bg.style.fill = "";   //color bg
    // Loop through each child element and set its fill to white
    childElements.forEach(child => {
      ball_bg.style.fill = "";
      child.style.fill = "";
    });
  });
  ball_bg.addEventListener("mouseout", function() {
    // Select all child elements
    const childElements = ball_logo.querySelectorAll("*");
    ball_logo.style.fill = ""; //color logo if it one part without any child elements
    ball_bg.style.fill = "";   //color bg
    // Loop through each child element and set its fill to white
    childElements.forEach(child => {
      ball_bg.style.fill = "";
      child.style.fill = "";
    });
  })
}

//show menus on mouse click on ball btns
let hiddenStatus = true;
for (let countElements = 0; countElements < 9; countElements++) {
  let showTextmenu = document.querySelector(textmenu[countElements]);
  let clickedBall_logo = document.querySelector(logo_btns[countElements]);
  let clickedBall_bg = document.querySelector(bg_btns[countElements]);
  
  let hideShow = function () {
    if (hiddenStatus == false) {
      for (let countElements1 = 0; countElements1 < 9; countElements1++) {  //hide all menu items
        document.querySelector(textmenu[countElements1]).style.visibility = "hidden";
      }
      hiddenStatus = true;
    }else{
      showTextmenu.style.visibility = "visible";
      hiddenStatus = false;
    }
  }
  
  clickedBall_logo.addEventListener("click", function () {
    hideShow()
  });

  clickedBall_bg.addEventListener("click", function () {
    hideShow()
  });
}

//hide menus on mouse click on textmenu items
for (let countElements = 0; countElements < 9; countElements++) {
  let clickedTextmenu = document.querySelector(textmenu[countElements]);
  clickedTextmenu.addEventListener("click", function () {
    for (let countElements1 = 0; countElements1 < 9; countElements1++) {  //hide all menu items
      document.querySelector(textmenu[countElements1]).style.visibility = "hidden";
    }
    hiddenStatus = true;
  });
}

//apply commands for each textmenu btn
let commands = ['winnew', 'winclean', 'curtain','floor', 'logo', 'mirror', 'smoothmirror', 'car', 'done', 'layers', 'pathtoselection', 'border', 'add', 'remove', 'bigger', 'smaller',
'shadow0', 'shadow45', 'shadow90', 'shadow00', 'shadow', 'plate', 'scene', 'wiredraw', 'wireextract','blur1', 'blur2', 'blur3', 'blur4', 'exit', 'save', 'psd', 'ol', "save", "showhide"]

let textmenu_btns = ['#win-new-btn', '#win-clean-btn', '#win-curtain-btn', '#amag-floor-btn', '#amag-logo-btn', '#amag-mirror-btn', '#amag-smirror-btn', '#car-menu', '#apply-menu', '#layers-btn', '#path-btn', '#edit-border-btn', '#edit-add-btn', '#edit-remove-btn', '#edit-bigger-btn', '#edit-smaller-btn', '#shadow-0deg-btn', '#shadow-45deg-btn', '#shadow-90deg-btn', '#shadow-rem-btn', '#shadow-selected-btn', '#assets-plate-btn', '#assets-scene-btn', '#wire-draw-btn', '#wire-extract-btn', '#filter-blur1-btn', '#filter-blur2-btn', '#filter-blur3-btn', '#filter-blur4-btn', '#file-exit-btn', '#file-save-btn', '#file-get-btn', '#file-recent-btn', "#save", "#visibility"]


//getting btn clicked, sending commands to main file
for(let countElements = 0; countElements < textmenu_btns.length; countElements++) {
  let clickedTextmenu = document.querySelector(textmenu_btns[countElements]);
  clickedTextmenu.addEventListener("click", function () {
    let command = commands[countElements];
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = ()=>{ws.send(command)}

  //   fetch('http://localhost:5000/commands', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ command: command })
  // })
  // .then(response => {
  //     if (response.ok) {
  //         console.log(command+" has been sent successfully");
  //     } else {
  //         console.error('Failed to send command data');
  //     }
  // })
  // .catch(error => {
  //     console.error('Error sending command data', error);
  // });

  })
}
//apply hover for each textmenu btn
//remove the latest 2 btns from hover list
textmenu_btns = ['#win-new-btn', '#win-clean-btn', '#win-curtain-btn', '#amag-floor-btn', '#amag-logo-btn', '#amag-mirror-btn', '#amag-smirror-btn', '#car-menu', '#apply-menu', '#layers-btn', '#path-btn', '#edit-border-btn', '#edit-add-btn', '#edit-remove-btn', '#edit-bigger-btn', '#edit-smaller-btn', '#shadow-0deg-btn', '#shadow-45deg-btn', '#shadow-90deg-btn', '#shadow-rem-btn', '#shadow-selected-btn', '#assets-plate-btn', '#assets-scene-btn', '#wire-draw-btn', '#wire-extract-btn', '#filter-blur1-btn', '#filter-blur2-btn', '#filter-blur3-btn', '#filter-blur4-btn', '#file-exit-btn', '#file-save-btn', '#file-get-btn', '#file-recent-btn']

for(let countElements=0; countElements<textmenu_btns.length; countElements++){
  let hoverTextmenu = document.querySelector(textmenu_btns[countElements]);
  //apply mouseover effect for textmenu_btns
  hoverTextmenu.addEventListener('mouseover', function() {
    this.style.filter = 'grayscale(100%) brightness(0.7) contrast(2)'
  });

  // Add event listener for mouseout to remove hover effect
  hoverTextmenu.addEventListener('mouseout', function() {
    this.style.filter = 'grayscale(0%) brightness(1) contrast(1)'
  });
}

//visible - hidden on click UI
let eyeopened = document.querySelector('#visible-logo')
let eyeclosed = document.querySelector('#hidden-logo')

//apply middle text on mousehover
textmenu_btns = ['#win-new-btn', '#win-clean-btn', '#win-curtain-btn', '#amag-floor-btn', '#amag-logo-btn', '#amag-mirror-btn', '#amag-smirror-btn', '#car-menu', '#apply-menu', '#layers-btn', '#path-btn', '#edit-border-btn', '#edit-add-btn', '#edit-remove-btn', '#edit-bigger-btn', '#edit-smaller-btn', '#shadow-0deg-btn', '#shadow-45deg-btn', '#shadow-90deg-btn', '#shadow-rem-btn', '#shadow-selected-btn', '#assets-plate-btn', '#assets-scene-btn', '#wire-draw-btn', '#wire-extract-btn', '#filter-blur1-btn', '#filter-blur2-btn', '#filter-blur3-btn', '#filter-blur4-btn', '#file-exit-btn', '#file-save-btn', '#file-get-btn', '#file-recent-btn', "#save", "#visibility"]
let newMiddleText_tmenu = ['Add new window', 'Clean Glass', 'Add Curtain', 'Resize Floor', 'Add Amag Logo', 'Gradient Mirror', 'Smooth Mirror', 'Select Car', 'Apply Selection', 'Select Layers', 'Path to Selection', 'Clean Border', 'Add Selected', 'Remove Selected', 'Make Car Bigger', 'Make Car Smaller', 'Shadow 0 Deg', 'Shadow 45 Deg', 'Shadow 90 Deg', 'Rem Shadow', 'Shadow Selected', 'Add Plate', 'Add Scene', 'Wire Drawing', 'Wire Extraction', 'Blur 1', 'Blur 2', 'Blur 3', 'Blur 4', 'Exit Without Save', 'Save', 'Get PSD by ID', 'Open Recent', 'Save', 'Show/Hide']

//for textmenus
for(let countElements=0; countElements<textmenu_btns.length; countElements++){
  let hoverTextmenu = document.querySelector(textmenu_btns[countElements]);
  let midtxt = document.querySelector('.btnnames')
  //apply mouseover effect for textmenu_btns
  hoverTextmenu.addEventListener('mouseover', function() {
    midtxt.textContent = newMiddleText_tmenu[countElements]
  });

  // Add event listener for mouseout to remove hover effect
  hoverTextmenu.addEventListener('mouseout', function() {
    midtxt.textContent = ''
  });
}
//for logo_btns
let newMiddleText_btn=['Windows', 'Premium', 'Select', 'Edit', 'Shadows', 'Assets', 'Wire', 'Filter', 'File']
for(let countElements=0; countElements<newMiddleText_btn.length; countElements++){
  let hoverLogo = document.querySelector(logo_btns[countElements]);
  let midtxt = document.querySelector('.btnnames')
  //apply mouseover effect for textmenu_btns
  hoverLogo.addEventListener('mouseover', function() {
    midtxt.textContent = newMiddleText_btn[countElements]
  });

  // Add event listener for mouseout to remove hover effect
  hoverLogo.addEventListener('mouseout', function() {
    midtxt.textContent = ''
  });
}
//for bg_btns
for(let countElements=0; countElements<newMiddleText_btn.length; countElements++){
  let hoverLogo = document.querySelector(bg_btns[countElements]);
  let midtxt = document.querySelector('.btnnames')
  //apply mouseover effect for textmenu_btns
  hoverLogo.addEventListener('mouseover', function() {
    midtxt.textContent = newMiddleText_btn[countElements]
  });

  // Add event listener for mouseout to remove hover effect
  hoverLogo.addEventListener('mouseout', function() {
    midtxt.textContent = ''
  });
}