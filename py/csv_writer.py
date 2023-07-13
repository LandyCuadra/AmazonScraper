import csv

product = GetVar('product')
result = {result}
csv_name = f'{product}_prices.csv'
fields = list(result[0].keys())

with open(f'C:/RocketbotProject/AmazonScrapper/files/result/{csv_name}', mode='w', encoding='utf-8', newline='') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fields)
    csv_writer.writeheader()
    csv_writer.writerows(result)