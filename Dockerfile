FROM nginx:alpine

#The working directory to the default Nginx directory for static files

WORKDIR /usr/share/nginx/html

# Removed default Nginx HTML files
RUN rm -rf ./*

# Copy website files from the current directory to the container
COPY . /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
