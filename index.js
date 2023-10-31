function saturdayFun(activity) {
    if (activity === undefined) {
    return `This Saturday, I want to roller-skate!`;
    } else {
        return `This Saturday, I want to ${activity}!`;
    }
}

saturdayFun('bathe my dog');
saturdayFun();

function mondayWork(activity) {
    if (activity === undefined) {
    return `This Monday, I will go to the office.`;
    } else {
        return `This Monday, I will ${activity}.`;
    }
}

mondayWork('work from home');
mondayWork();

function wrapAdjective(flair) {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("*");

encouragingPromptFunction("awesome");
encouragingPromptFunction();
