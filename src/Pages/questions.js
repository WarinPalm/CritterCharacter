const questions = [
    {
        id: 1,
        question: "How do you spend your weekend?",
        answers: [
            { text: "Exploring new places or hobbies.", points: 4 },
            { text: "Hanging out with friends or family.", points: 3 },
            { text: "Reading a book or solving puzzles.", points: 2 },
            { text: "Relaxing with your favorite shows.", points: 1 },
        ],
    },
    {
        id: 2,
        question: "What’s your approach to solving problems?",
        answers: [
            { text: "Carefully analyze all options and proceed logically.", points: 4 },
            { text: "Get advice from friends or trusted individuals.", points: 3 },
            { text: "Use your instincts and make quick decisions.", points: 2 },
            { text: "Step back and let things resolve themselves naturally.", points: 1 },
        ],
    },
    {
        id: 3,
        question: "How do others describe you?",
        answers: [
            { text: "Playful and full of energy.", points: 4 },
            { text: "Bold and determined to achieve goals.", points: 3 },
            { text: "Wise and mysterious.", points: 2 },
            { text: "Gentle and tolerant.", points: 1 },
        ],
    },
    {
        id: 4,
        question: "What’s your favorite activity?",
        answers: [
            { text: "Playing games or running around with others.", points: 4 },
            { text: "Observing and learning new things.", points: 3 },
            { text: "Taking on challenges and risks.", points: 2 },
            { text: "Exploring independently and trying new things.", points: 1 },
        ],
    },
    {
        id: 5,
        question: "How do you respond to challenges?",
        answers: [
            { text: "Stay calm and think through them logically.", points: 4 },
            { text: "Face them boldly and with confidence.", points: 3 },
            { text: "Tackle them with a curious and open mind.", points: 2 },
            { text: "Lean on others for support and guidance.", points: 1 },
        ],
    },
    {
        id: 6,
        question: "What’s your favorite way to spend time with friends?",
        answers: [
            { text: "Discussing meaningful topics or learning something new.", points: 4 },
            { text: "Going on adventures or trying something exciting.", points: 3 },
            { text: "Relaxing and being playful together.", points: 2 },
            { text: "Being around them but doing your own thing.", points: 1 },
        ],
    },
    {
        id: 7,
        question: "What’s your reaction to change?",
        answers: [
            { text: "Embrace it and adapt quickly.", points: 4 },
            { text: "Think through the implications carefully.", points: 3 },
            { text: "Seek stability and minimize disruption.", points: 2 },
            { text: "Welcome the challenge and take risks.", points: 1 },
        ],
    },
    {
        id: 8,
        question: "What motivates you most?",
        answers: [
            { text: "Achieving goals and being recognized for success.", points: 4 },
            { text: "Understanding the world and gaining wisdom.", points: 3 },
            { text: "Making others happy and fostering connections.", points: 2 },
            { text: "Exploring new things and satisfying curiosity.", points: 1 },
        ],
    },
    {
        id: 9,
        question: "What’s your favorite environment?",
        answers: [
            { text: "A lively, bustling place full of energy.", points: 4 },
            { text: "A quiet, peaceful space to reflect.", points: 3 },
            { text: "A cozy spot surrounded by loved ones.", points: 2 },
            { text: "A familiar area where you can be comfortable.", points: 1 },
        ],
    },
    {
        id: 10,
        question: "What describes your social style?",
        answers: [
            { text: "Outgoing and eager to meet new people.", points: 4 },
            { text: "Observant, preferring meaningful conversations.", points: 3 },
            { text: "Fun-loving and easygoing.", points: 2 },
            { text: "Ambitious and seeking connections with a purpose.", points: 1 },
        ],
    },
    {
        id: 11,
        question: "How do you approach goals?",
        answers: [
            { text: "Plan methodically and execute precisely.", points: 4 },
            { text: "Stay determined and keep trying until you succeed.", points: 3 },
            { text: "Tackle them with enthusiasm and spontaneity.", points: 2 },
            { text: "Focus on achieving results as quickly as possible.", points: 1 },
        ],
    },
    {
        id: 12,
        question: "What’s your dream vacation?",
        answers: [
            { text: "An adventurous trip exploring the unknown.", points: 4 },
            { text: "A luxurious, fun-filled getaway with friends.", points: 3 },
            { text: "A serene retreat to relax and recharge.", points: 2 },
            { text: "A family-friendly destination with activities for all ages.", points: 1 },
        ],
    },
    {
        id: 13,
        question: "How do you react under pressure?",
        answers: [
            { text: "Stay calm and logically find a solution.", points: 4 },
            { text: "Push through with determination and confidence.", points: 3 },
            { text: "Rely on past wisdom and careful thinking.", points: 2 },
            { text: "Seek support and work together with others.", points: 1 },
        ],
    },
    {
        id: 14,
        question: "How do you feel about rules?",
        answers: [
            { text: "Prefer a structured and logical framework.", points: 4 },
            { text: "Respect them but will bend them if needed.", points: 3 },
            { text: "Like to find creative ways around them.", points: 2 },
            { text: "Avoid them if they limit your freedom.", points: 1 },
        ],
    },
    {
        id: 15,
        question: "What’s your greatest strength?",
        answers: [
            { text: "Wisdom and understanding of complex matters.", points: 4 },
            { text: "Boldness and determination to achieve goals.", points: 3 },
            { text: "Curiosity and enthusiasm for new things.", points: 2 },
            { text: "Gentleness and patience with others.", points: 1 },
        ],
    },
    {
        id: 16,
        question: "How do you handle group projects?",
        answers: [
            { text: "Take charge and lead the way.", points: 4 },
            { text: "Contribute ideas and help where needed.", points: 3 },
            { text: "Analyze tasks and ensure efficiency.", points: 2 },
            { text: "Stay in the background but offer support.", points: 1 },
        ],
    },
    {
        id: 17,
        question: "How do you make decisions?",
        answers: [
            { text: "Trust your instincts and make quick choices.", points: 4 },
            { text: "Reflect on options and think them through.", points: 3 },
            { text: "Take advice from trusted people.", points: 2 },
            { text: "Go with the flow and let things happen.", points: 1 },
        ],
    },
    {
        id: 18,
        question: "What’s your communication style?",
        answers: [
            { text: "Direct and assertive in expressing your ideas.", points: 4 },
            { text: "Gentle and considerate of others’ feelings.", points: 3 },
            { text: "Logical and to the point.", points: 2 },
            { text: "Mysterious and thought-provoking.", points: 1 },
        ],
    },
    {
        id: 19,
        question: "What’s your ideal work style?",
        answers: [
            { text: "Collaborating and connecting with others.", points: 4 },
            { text: "Working independently with a clear plan.", points: 3 },
            { text: "Learning new things while enjoying the process.", points: 2 },
            { text: "Helping others achieve their best.", points: 1 },
        ],
    },
    {
        id: 20,
        question: "How do you relax?",
        answers: [
            { text: "Spending time with loved ones or friends.", points: 4 },
            { text: "Enjoying quiet, introspective activities.", points: 3 },
            { text: "Exploring hobbies or new interests.", points: 2 },
            { text: "Watching a favorite show or reading.", points: 1 },
        ],
    },
    {
        id: 21,
        question: "What inspires you?",
        answers: [
            { text: "Discovering and mastering new skills.", points: 4 },
            { text: "Making meaningful connections with people.", points: 3 },
            { text: "Pushing boundaries and achieving success.", points: 2 },
            { text: "Enjoying the little things in life.", points: 1 },
        ],
    },
    {
        id: 22,
        question: "How do you handle criticism?",
        answers: [
            { text: "Use it to improve and grow.", points: 4 },
            { text: "Consider the advice but stick to your beliefs.", points: 3 },
            { text: "Accept it gracefully and move on.", points: 2 },
            { text: "Shrug it off and focus on your goals.", points: 1 },
        ],
    },
    {
        id: 23,
        question: "What’s your leadership style?",
        answers: [
            { text: "Lead by example with a clear, logical approach.", points: 4 },
            { text: "Encourage collaboration and motivate others.", points: 3 },
            { text: "Focus on results and assertiveness.", points: 2 },
            { text: "Inspire others with curiosity and independence.", points: 1 },
        ],
    },
    {
        id: 24,
        question: "How do you handle unexpected situations?",
        answers: [
            { text: "Adapt quickly and find creative solutions.", points: 4 },
            { text: "Analyze carefully and develop a plan.", points: 3 },
            { text: "Stay calm and rely on your instincts.", points: 2 },
            { text: "Face them boldly and take action immediately.", points: 1 },
        ],
    },
    {
        id: 25,
        question: "What makes you happiest?",
        answers: [
            { text: "Solving a tough problem or learning something new.", points: 4 },
            { text: "Sharing love and making others smile.", points: 3 },
            { text: "Exploring the unknown and trying new things.", points: 2 },
            { text: "Achieving a goal or milestone.", points: 1 },
        ],
    },
    {
        id: 26,
        question: "How do you feel after spending time with a group of people?",
        answers: [
            { text: "Energized and excited for more socializing.", points: 4 },
            { text: "A little tired but content with the experience.", points: 3 },
            { text: "Drained and in need of alone time to recharge", points: 2 },
            { text: "Inspired to pursue your own creative ideas.", points: 1 },
        ],
    },
    {
        id: 27,
        question: "How do you respond to unfamiliar ideas or philosophies?",
        answers: [
            { text: "Approach them with curiosity and an open mind.", points: 4 },
            { text: "Consider them carefully before forming an opinion.", points: 3 },
            { text: "Stick to familiar perspectives unless convinced otherwise.", points: 2 },
            { text: "Feel hesitant but willing to explore if necessary.", points: 1 },
        ],
    },
    {
        id: 28,
        question: "How do you feel when someone disagrees with you?",
        answers: [
            { text: "Try to understand their perspective but share your own calmly.", points: 4 },
            { text: "Avoid conflict and quietly agree, even if you don’t fully agree.", points: 3 },
            { text: "Hold your ground and respectfully argue your point.", points: 2 },
            { text: "Seek common ground to maintain harmony.", points: 1 },
        ],
    },
    {
        id: 29,
        question: "If you see someone struggling, how likely are you to help?",
        answers: [
            { text: "Offer help immediately, even to strangers.", points: 4 },
            { text: "Assess the situation and offer help if it’s feasible.", points: 3 },
            { text: "Help if it aligns with your current priorities or interests.", points: 2 },
            { text: "Prefer to stay uninvolved unless asked directly.", points: 1 },
        ],
    },
    {
        id: 30,
        question: "How do you feel about social interactions and group activities?",
        answers: [
            { text: "Thrive in social settings and enjoy energizing the group.", points: 4 },
            { text: "Enjoy them in moderation, preferring meaningful connections.", points: 3 },
            { text: "Participate when necessary but prefer independence.", points: 2 },
            { text: "Feel drained and prefer small, quiet gatherings.", points: 1 },
        ],
    }
    
];

export default questions;
