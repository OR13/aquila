
# Usage: ./rotate-secrets.sh ./.env
                 
echo "Updating GitHub Secrets with CLI..."

source $1;

gh secret set OPENAI_API_KEY --body "$OPENAI_API_KEY"
gh secret set PERSONAL_ACCESS_TOKEN --body "$PERSONAL_ACCESS_TOKEN"

