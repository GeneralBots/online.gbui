az account set --subscription "e553c472-7760-4ed2-bb7f-b2b9292f4a33"
npx expo export --platform web
swa deploy --env production
rm -rf out
git add .
git commit -a -m 'Updated.'
git push