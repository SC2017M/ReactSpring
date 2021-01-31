set JAVA_HOME=C:\Program Files\OpenJDK\jdk-11
echo %JAVA_HOME%
"%JAVA_HOME%\bin\java" -version
"%JAVA_HOME%\bin\java" -jar ./build/libs/salon-api-0.0.1-SNAPSHOT.jar --springdoc.swagger-ui.disable-swagger-default-url=true --server.port=9090
REM "%JAVA_HOME%\bin\java" -jar ./build/libs/salonapi-0.0.1-SNAPSHOT.jar --springdoc.swagger-ui.disable-swagger-default-url=true