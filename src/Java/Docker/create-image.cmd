docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya3-java/app ../../..
