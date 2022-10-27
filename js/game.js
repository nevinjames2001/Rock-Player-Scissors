/**Nevin James,000825144
This is Assignment 2 of PHP AND JAVSCRIPT of Winter 2021 and it is created and submitted on 8th March 2021
This is an Assignment is a practical demonstration on Javscript and its eventhandlers**/

///This is the javscript file of the game
window.addEventListener("load", function () {
    
    ///This is queryselector and the different node list are stored into different types of constants
    const selectionButtons = document.querySelectorAll('[data-selection]')
    ///This query selector displays the output option which the computer selects
    const finalColumnComp = document.querySelector('[data-final-column-comp]')
    ///This query selector displays the output option which the player uses
    const finalColumnPlayer = document.querySelector('[data-final-column-player]')
    ///This query selector displays the score of computer
    const ComputerScore = document.querySelector('[data-computer-score]')
    ///This query selector displays the score of the player
    const playerScore = document.querySelector('[data-player-score]')
    //SELECTIONS contains the combination  of options  the player and computer selects and it's output
    const SELECTIONS = [
        {
            name: 'rock',
            url: 'images/rock.png',
            beats: 'scissors'
        },
        {
            name: 'paper',
            url: 'images/paper.png',
            beats: 'rock'
        },
        {
            name: 'scissors',
            url: 'images/scissor.png',
            beats: 'paper'
        }
    ]

    /**let x=document.getElementById("regform");
    let playername=x.elements[0].value;**/

    /**
     * This function used for make selections and it's opponent options
     * 
     * @param{click } event
     * @returns slection
     */
    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', e => {
            
            const selectionName = selectionButton.dataset.selection
            const selection = SELECTIONS.find(selection => selection.name === selectionName)
            makeSelection(selection)
        })
    })

    /**
     * This function tells whox is the winner of the game
     * @param {*} selection 
     * @returns the winner among the selections
     */
    function makeSelection(selection) {
        
        const computerSelection = randomSelection()
        const playerWinner = theWinner(selection, computerSelection)
        const computerWinner = theWinner(computerSelection, selection)

        addSelectionResultComp(computerSelection, computerWinner)
        addSelectionResultPlayer(selection, playerWinner)

        if (playerWinner) incrementScore(playerScore, 'Computer')
        if (computerWinner) incrementScore(ComputerScore, 'Player')
        
        checkTheWinner();
    }

    
    /**
     * To display a message who is the winner of the game
     */
    function checkTheWinner() {
        if (parseInt(playerScore.innerText) == 10 && parseInt(ComputerScore.innerText) < 10) {
            alert('Congartulations,You are the winner!')
            playerScore.innerText=0;
            ComputerScore.innerText=0
        }
        else if (parseInt(playerScore.innerText) < 10 && parseInt(ComputerScore.innerText) == 10) {
            alert(' Winner is Computer')
            playerScore.innerText=0;
            ComputerScore.innerText=0
        }
        else if(parseInt(playerScore.innerText)==10 && parseInt(ComputerScore.innerText)==10){
            alert('Play again!Both of you got same score')
            playerScore.innerText=0;
            ComputerScore.innerText=0;
        }
    }

    /**
     * To displaying the output of the computer selection in the circle of the computer's slection
     * @param {*} selection 
     * @param {*} winner
     * @returns the computer's option 
     */
    function addSelectionResultComp(selection, winner) {
        finalColumnComp.innerHTML = ""
        const div = document.createElement('div')
        div.innerHTML = '<img src="' + selection.url + '">'
        div.classList.add('result-selection')
        if (winner) div.classList.add('winner')
        finalColumnComp.appendChild(div)
    }

    /**
     * To displaying the output of the player selection in the circle of the players's slection
     * @param {*} selection 
     * @param {*} winner 
     * @returns the player;s optiom
     */
    function addSelectionResultPlayer(selection, winner) {
        finalColumnPlayer.innerHTML = ""
        const div = document.createElement('div')
        div.innerHTML = '<img src="' + selection.url + '">'
        div.classList.add('result-selection')
        if (winner) div.classList.add('winner')
        finalColumnPlayer.appendChild(div)
    }

    function theWinner(selection, opponentSelection) {
        return selection.beats === opponentSelection.name
    }

    
    /**this function is used to display a message when we click  help button
     * 
     */
    let help=document.getElementById("help");
    help.addEventListener("click",function(){
        window.alert("This is a Rock,Paper,Scissors game\r\n"+
                "1.Click on the 3 options of rock,paper,scissors in the bottom of page\r\n"+
                "2.Your score will be displayed on the right side of the page\r\n"+
                "3.The total score is out of 10.");
    })
    /**
     * Computer selcting an random option among theree options available
     * 
     * @returns the computer option
     */
    function randomSelection() {
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
        return SELECTIONS[randomIndex]
    }
    /**
     * Used for incrementing the scores
     * @param {*} scoreSpan 
     * @param {*} type 
     */
    function incrementScore(scoreSpan, type) {
        scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
    }

    
});