# yelp.py
import requests

def search_yelp(location, term, api_key):
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": f"Bearer {api_key}"}
    params = {"location": location, "term": term}
    response = requests.get(url, headers=headers, params=params)
    return response.json()