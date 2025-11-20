import sys
import json

with open('lighthouse-after.report.json', 'r') as f:
    data = json.load(f)

categories = data['categories']
print('LIGHTHOUSE SCORES (PRODUCTION):')
print('=' * 40)
print(f'Performance: {categories["performance"]["score"]*100:.0f}')
print(f'Accessibility: {categories["accessibility"]["score"]*100:.0f}')
print(f'Best Practices: {categories["best-practices"]["score"]*100:.0f}')
print(f'SEO: {categories["seo"]["score"]*100:.0f}')
print()
print('KEY METRICS:')
print('=' * 40)
audits = data['audits']
metrics = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']
for metric in metrics:
    print(f'{audits[metric]["title"]}: {audits[metric].get("displayValue", "N/A")} (score: {audits[metric]["score"]})')
