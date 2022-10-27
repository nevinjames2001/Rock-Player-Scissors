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
