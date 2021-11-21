# NGINX
We use nginx as a reverse proxy for our api and serving our static files.

## nginx.conf
This file is the base config of Nginx. We added the following line to enable `image_filter` module which will be used to resize the images.
```
load_module /etc/nginx/modules/ngx_http_image_filter_module.so;
```

## templates
Nginx reads template files in /etc/nginx/templates/*.template and outputs the result of executing envsubst to /etc/nginx/conf.d.

### default.conf.template
We laucn a server which listen to host defined with `API_HOST_ADDRESS` variable in `.env` file.