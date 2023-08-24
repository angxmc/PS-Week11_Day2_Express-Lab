# PS-Week11_Day2_Express-Lab

## Greetings
1. Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
2. Give the greetingroute a param /:name
3. When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).
🔴 Commit
"Greeting express application created."

## Tip Calculator
1. Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
2. When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20on the page).
🔴 Commit
"Tip Calculator express application created."

## Magic 8 Ball
1. Create a route of '/magic'that should expect a phrase in the URL that ask the Magic 8 ball a question.
2. So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.
3. We can't use spaces in the url, so we use %20to express a space in the url.
4. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
5. Send the magic 8 ball response back between html `<h1>` tags
6. Use this array of Magic 8 ball responses.....

["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

🔴 Commit
"Magic 8 Ball express application created."