set JAVA_HOME=C:\Program Files\Java\jdk1.8.0_251
echo %JAVA_HOME%
"%JAVA_HOME%\bin\java" -version
"%JAVA_HOME%\bin\java" -jar ./build/libs/salonapi-0.0.1-SNAPSHOT.jar --springdoc.swagger-ui.disable-swagger-default-url=true --server.port=8083