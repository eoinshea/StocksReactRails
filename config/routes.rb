SampleReactRailsApp::Application.routes.draw do
  resources :stocks
  root to: 'home#welcome'


end
