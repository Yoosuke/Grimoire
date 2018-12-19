{application,sendgrid,
             [{applications,[kernel,stdlib,elixir,logger,poison,httpoison]},
              {description,"A wrapper for SendGrid's API to create composable emails.\n"},
              {modules,['Elixir.SendGrid','Elixir.SendGrid.Contacts.Lists',
                        'Elixir.SendGrid.Contacts.Recipients',
                        'Elixir.SendGrid.Email','Elixir.SendGrid.Mailer']},
              {registered,[]},
              {vsn,"1.8.0"},
              {extra_applications,[logger]}]}.
