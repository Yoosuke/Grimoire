# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :grimoire,
  ecto_repos: [Grimoire.Repo]

# Configures the endpoint
config :grimoire, GrimoireWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Fmg6Zg9dstVuLN8M7oUm4A/YLRVX5C+fRcD5AsjZBwp5ztz9k+G767Kx+EKLqeLm",
  render_errors: [view: GrimoireWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Grimoire.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configures Guardian
config :materia, Materia.Authenticator,
  issuer: "grimoire",
  access_token_ttl: {10, :minutes}, #必須
  refresh_token_ttl: {1, :days}, # refresh_tokenを定義しない場合sign-inはaccess_tokenのみ返す
  user_registration_token_ttl: {35, :minutes},
  password_reset_token_ttl: {35, :minutes},
  secret_key: "${GRIMOIRE_SECRET_KEY}",
  allowed_algos: ["HS256"]

# Configures GuardianDB
config :guardian, Guardian.DB,
repo: Grimoire.Repo,  #<- mod your app repo
schema_name: "guardian_tokens", # default
#token_types: ["refresh_token"], # store all token types if not set
sweep_interval: 60 # default: 60 minutes

# Configures calender utils locale (default is server locale)
config :materia_utils, calender_locale: "Asia/Tokyo"
