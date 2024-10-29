# 每一个属性都是一个指令

server {
	listen 7100;
	server_name localhost;

	location / {
		root /usr/share/nginx/html/app-sub;
		index index.html index.htm;
		try_files $uri $uri/ /index.html;

		add_header 'Access-Control-Allow-Origin' '*';
    		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    		add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';

    		if ($request_method = 'OPTIONS') {
        		add_header 'Access-Control-Allow-Origin' '*';
        		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        		add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
        		return 204;
    }

	}

	location ^~ /app-sub/assets/ {
		alias /usr/share/nginx/html/app-sub/assets/;
		# expires 4d;
		try_files $uri =404;
	}
}

server {
	listen 80;
	# server_name domain.com;
	server_name localhost;

	# root /usr/share/nginx/html;
	# index index.html index.htm;

	location / {
		root /usr/share/nginx/html;
		# 当客户端请求一个目录且该目录下没有找到index.html、index.htm时，用于指定是否显示目录中文件列表
		autoindex off;
	}

	location /react-app {
		# root 末尾可以不用 /，
		# root /usr/share/nginx/html;
		# alias 必须以 / 结尾，
		alias /usr/share/nginx/html/react-app/;
		index index.html index.htm;
		try_files $uri $uri/ /react-app/index.html; # 防止刷新页面出现404
		autoindex off;

		 add_header 'Access-Control-Allow-Origin' '*';
    		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';

    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
        return 204;
    }


	}

	location /app-sub {
		# root /usr/share/nginx/html;
		alias /usr/share/nginx/html/app-sub/;
		index index.html index.htm;
		try_files $uri $uri/ /app-sub/index.html;
		autoindex off;
	}

	location ^~ /react-app/assets/ {
		alias /usr/share/nginx/html/react-app/assets/;
		expires 7d;
		try_files $uri =404;
		add_header Cache-Control "public, no-transform";
		autoindex off;
	}

	location ^~ /app-sub/assets/ {
		alias /usr/share/nginx/html/app-sub/assets/;
		expires 7d;
		try_files $uri =404;
		add_header Cache-Control "public, no-transform";
		autoindex off;
	}

	# location /vue-app/assets/ {
		# alias /usr/share/nginx/html/vue-app/assets/;
		# root /usr/share/nginx/html/vue-app;
		# try_files $uri =404;
		# expires 7d;
		# add_header Cache-Control "public, no-transform";
	# }

	# location ^~ /assets/ {
		# 方式一:
		# /usr/share/nginx/html;
		# 方式二:
		# alias /usr/share/nginx/html/assets/;
		# try_files $uri =404;
		# expires 7d;
		# add_header Cache-Control "public, no-transform";
	# }

	# location /react-app {
		# 路径中会包含 location
		# root /usr/share/nginx/html;
		# index index.html index.htm;
		# 路径中不包含location 的部分，例如: /react-app
		# alias /usr/share/nginx/html/react-app/;
		# try_files $uri $uri/ react-app/index.html;
	# }

	# location /vue-app {
	#  	alias /usr/share/nginx/html/vue-app/;
	#  	try_files $uri $uri/ /index.html;
	# }

	# 配置静态文件缓存
	# location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
	#    	expires 7d;
	#    	add_header Cache-Control "public, no-transform";
	# }

	# 防止 Nginx 显示目录结构
	autoindex off;
}