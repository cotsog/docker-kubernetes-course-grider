# Use an exsisting docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the image what to do when it starts up as a container
CMD ["redis-server"]