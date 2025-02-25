# Riseup Exercise

Guide-line:
* Your code should be of decent quality, not terrible and not perfect. If it's perfect - you're probably spending too much time on it.
  

# Welcome to RiseUp 📊

At RiseUp we have a special way of helping families view their money.
Usually, people look at the עובר ושב (a.k.a. balance) in their bank account to see how much money they have.  However, this number is *very* misleading (sometimes we refer to it as the עובר *ושווא* 😏). 
Why? because it doesn't help answer the question "can I spend 100 shekels now?". 

📉 For example, Someone might have 1000 shekels in their bank account but every month spend 200 shekels more than they earn! At this rate, even though the עובר ושב looks positive, within 5 months all the money will be gone. 

And so, we use a method called... 🥁🥁🥁
##Tazrim (תזרים)

📊 In this method, we give customers a monthly view of their income vs expenses. For example, if in january you earned 10000 shekels and have spent 6000, you have another 4000 you can spend! (Of course we also encourage saving 💰) 

In this exercise you are actually going to build a mini-Tazrim system and help the Cohen family discover how much money they can spend and grow financially 💸


# Predicting 🔮

The challenging thing about what we do is that it involves predicting the future. 
At the begining of February, the Cohen family has a salary of 15000 shekels. However, this is not the money they can spend!
Why?
* On the 10th  of the month they pay their mashkanta (3000 shekel)
* On the 15th they pay for their kids Gan (2500 shekel)
* etc....

In order to give an accurate reading of how much money a family can spend, we need to take these into account.
We usually even need to predict the salary itself! (which usually arrives only after the month has started).

###### THE REQUIREMENTS - READ CAREFULLY ########

🎯 Your goal is to write a function, named getPredictedAmount that reads the given transaction file (`transactions.json`), and returns the number indicating the the EXACT AMOUNT of money that the Cohen family can spend in the given month, considering the predicted INCOME, MASHKANTA and ELECTRICITY.
 
You should base your prediction on the following rules:
1. משכורת: Predict a salary if an employer's name appeared at least twice in the past. Assume the latest salary from each employer is what you can predict this month (You do not have to check for consecutive months).
2. משכנתא: Predict this even if it happened once. Assume the latest amount is what you can expect this month.
3. חשבון חשמל: Predict the electric bill based on the average of the previous ones.

For simplicity purposes, anything other than Salary (משכורת), Mortgage (משכנתא) or Electricity Bill (חשבון חשמל) should be ignored. Anything that is not explicitly defined in these 3 instructions is not required.

You may assume that the given transactions would not exceed the requested month (for example if we ask for April, we won't give you transactions from May or June).

Implement the method in the `exercise.js`/`exercise.py` file.
The data is in the `transactions.json` file.

To check your answer you can run:

| Language | Command |
| --- | ----------- |
| python | `pytest check.py` |
| javascript | `node check.js` |
