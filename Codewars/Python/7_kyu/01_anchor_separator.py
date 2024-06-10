# Complete the function/method so that it returns
# the url with anything after the anchor (#) removed.


def remove_url_anchor(url):
    splitted_url = url.split("#")

    return splitted_url[0]
