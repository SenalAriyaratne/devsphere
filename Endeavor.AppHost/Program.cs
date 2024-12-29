var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.Endeavor_ApiService>("apiservice");

builder.AddNpmApp("webfrontend-react", "../Endeavor.ReactUi/react-ui")
.WithReference(apiService)
.WaitFor(apiService)
.WithEnvironment("BROWSER", "none")
.WithHttpEndpoint(env: "PORT",port: 5173)
.WithExternalHttpEndpoints()
.PublishAsDockerFile();
    

builder.AddProject<Projects.Endeavor_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(apiService);

builder.Build().Run();
