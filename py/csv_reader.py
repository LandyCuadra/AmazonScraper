import csv

csv_result = []
with open('C:/RocketbotProject/AmazonScraper/files/productInput.csv', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file, delimiter=',')
    for row in csv_reader:
        csv_result.append(row)

SetVar('products', csv_result)