import json, requests # json 형태로 데이터를 주고받을 때 사용

obj = {
    'name' : 'son',
    'age' : 30
}

json_str = json.dumps(obj)
print(json_str) # {"name": "son", "age": 30}
print(type(json_str)) # <class 'str'>

json_obj = json.loads(json_str)
print(json_obj) # {"name": "son", "age": 30}
print(type(json_obj)) # <class 'dict'>

res = requests.get('https://dummyjson.com/products/1') # GET 방식으로 URL 에서 데이터를 가져온다.
print(res.status_code) # 200
print(res.text) # {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]}
print(type(res.text)) # <class 'str'>
json_res_text = json.loads(res.text)
print(json_res_text["title"]) # iPhone 9

res = requests.get('https://www.google.com/')
print(res.text) # 구글의 HTML을 받아온다.