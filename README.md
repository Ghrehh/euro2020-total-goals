# Development
Run `yarn getData` with a valid `FOOTBALL_DATA_ACCESS_TOKEN` in you
environment to populate the data needed to run the app locally.

This same data is pulled down automatically on GitHub during deploys to ensure
the site is built with the latest information. A build can be triggered manually
on GitHub to keep information up to date.

# Redeploying/Updating production data

![how to deploy](how_to_deploy.png?raw=true "How to Deploy")

Redeploying will update the goals data.

# Updating other data

Entries and the pot total can be edited
[here](https://github.com/Ghrehh/euro2020-total-goals/edit/master/src/data/pot.json)

Make sure the pot is entered in subunits (pennies), and that the list of entries
doesn't end with a comma.

You'll then need to deploy for this changed data to be reflected on the production
application.
