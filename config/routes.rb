SampleReactRailsApp::Application.routes.draw do
  resources :stocks
  root :to => redirect("/comments")
end
