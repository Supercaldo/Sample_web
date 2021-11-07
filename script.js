function changeBackground(imgPath) {
    const background = document.getElementById('background');
    background.style.backgroundImage = `url(${imgPath})`;
}

function startGame() {
    

    let chooseDoor = confirm(`YOU HAVE TO CHOOSE YOUR DESTINATION AT THE END OF THE YEAR? ARE YOU READY?`);

  if (chooseDoor) {
    ;

    let openDoor = +prompt(`YOUR END OF THE YEAR WILL BE DEFINED ACORDING TO THE DOOR YOU SELECT. YOU CAN TRY DOOR 1, 2 OR 3 ;)`);

    switch (openDoor) {
      case 1:
        alert(`YOU ARE GOING TO HAVE A WONDERFUL CHRISTMAS ! YAY !!
            `);
            changeBackground('./data/Christmas.gif');
        break;
        case 2:
          alert(`UPSS BAD CHOICE, THERE IS NO TURNING BACK, BUT THERE ARE BETTER WAYS THAN OTHERS. `);
           changeBackground('./data/CreepyDoor.jpeg');
  
          let corridorChoice = prompt(`YOU HAVE REACHED A CORRIDOR, DO YOU WANT TO GO (LEFT), (STRAIGHT) OR (RIGHT).`);
  
          if (corridorChoice.toLowerCase() === 'left') {
            alert(`DO YOU REALLY WANT TO GO THERE ????????`);
            changeBackground('./data/scary-ghost.gif');
            alert(`DO YOU WANT TO COME BACK?`);
            if(confirm('YES PLEASE !!')){
              window.location.reload(corridorChoice);  
            }
            
  
          }else if (corridorChoice.toLowerCase() === 'right') {
          alert(`OK LETS GO !!!`);
          changeBackground('./data/Help.jpeg');
          alert(`MMM NOTHING SPECIAL, DO YOU WANT TO COMEBACK?`);
          if(confirm('YES PLEASE !!')){
          window.location.reload(corridorChoice);  
        }
  
            
          } else {
            alert(`MMMM ANOTHER ROOM`);
            changeBackground('./data/Window.jpeg');
  
            let corridorChoice = prompt(`IT LOOKS LIKE THERE IS A WAY OUT OF THAT WINDOW, DO YOU WANT TO GO ?(NO), (YES)`);
  
            if (corridorChoice.toLowerCase() === 'no');
          
            else { alert(`OK LETS GO !!!`);

            if (corridorChoice.toLocaleLowerCase() === 'yes') {
 
            changeBackground('./data/Window-election.gif');
            alert("AHHHHHHHHHHHHHH !!!!!");
            alert('HAPPY HOLLIDAYS :D');
    
          }
            
          }
          break;
        }
      case 3:
        alert(`YOU ARE GOING TO MEET SOMEONE VERY SPECIAL`);
        changeBackground('./data/Creepyguy.gif');
        break;

        
      
      
        
    }
  } else {
    // We don't enter
    alert(`OHHH SOMEONE ISN'T BRAVE ENOUGH TO ENTER ???` );
  }



}


