import os
import glob

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace v-model="input" -> v-model="keyword"
    content = content.replace('v-model="input"', 'v-model="keyword"')
    
    # Replace input: '', -> keyword: '',
    content = content.replace("input: '',", "keyword: '',")
    content = content.replace('input: "",', 'keyword: "",')
    
    # Replace this.searchInput = this.input -> this.searchInput = this.keyword
    content = content.replace('this.searchInput = this.input', 'this.searchInput = this.keyword')
    
    # Replace parameter in method definitions and calls
    # e.g., (pageNum,limit,input) -> (pageNum,limit,keyword)
    content = content.replace(',input)', ',keyword)')
    content = content.replace(', input)', ', keyword)')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

vue_files = glob.glob('film_admin/src/pages/Home/children/*.vue') + glob.glob('film_admin/src/pages/Business/children/*.vue')
for file in vue_files:
    replace_in_file(file)
    print(f"Processed {file}")
