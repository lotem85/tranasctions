import exercise
import json

def test_answer():
    transaction_file = open('./transactions.json')
    transactions = json.load(transaction_file)
    transaction_file.close()
    predicted_amount = exercise.get_predicted_amount(transactions, '2022-04')
    assert isinstance(predicted_amount, int), 'Expected predicted_amount to return integer'
    assert predicted_amount == 9900, 'Expected predicted_amount to return 9900'
