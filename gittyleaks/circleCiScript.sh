cd afdezfraga.github.io

echo "Mi pass es $BOTPASSWD"

echo "Y la otra variable es $BOTTEST"

git pull

gittyleaks -u afdezfraga -r afdezfraga.github.io -d -o -a -b -f > gittyleaks/analisis.out

git add gittyleaks/analisis.out

git config --global user.email "PE-2021q1gi@torusware.com"
git config --global user.name "Becarios Torus"

git commit -m "[skip ci]"

git push https://$BOTNAME:$BOTPASSWD@github.com/afdezfraga/afdezfraga.github.io.git --all
