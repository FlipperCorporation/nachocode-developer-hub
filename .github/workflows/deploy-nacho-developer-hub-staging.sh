CURRENT_PID=$(lsof -ti :3005)

if [ -z "$CURRENT_PID" ]; then
  echo "Nacho Developer Hub process is not working."
else
  kill -9 $CURRENT_PID
  echo "Nacho Developer Hub process is working. Process was killed."
  sleep 1
fi
git fetch

git pull origin main
# git pull이 성공적으로 이루어지는지 확인
if [ $? -ne 0 ]; then
  echo "Failed to fetch and pull code from the 'main' branch."
  git pull origin main >&2
  exit 1
fi

source ~/.zshrc

npm install
# npm install이 성공적으로 이루어지는지 확인
if [ $? -ne 0 ]; then
  echo "Failed to install npm packages."
  exit 1
fi

# 서빙을 위해 빌드
npm run build

if [ $? -ne 0 ]; then
  echo "Failed to execute 'npm run build'."
  exit 1
fi

# 페이지 서빙
npm run serve:back

if [ $? -ne 0 ]; then
  echo "Failed to execute 'npm run serve:back'."
  exit 1
fi

sleep 3

STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3005/")

RUNNING_PID=$(lsof -ti :3005)


# npm run serve가 정상적으로 실행됐는지 확인
if [ -z "$RUNNING_PID" ]; then
  echo "Failed to execute 'npm run serve:back'."
  exit 1
fi

# 빌드가 제대로 실행되지 않은 경우 PID는 존재하지만 에러 발생 가능
# curl status code가 올바르지 않은 경우
if [ "$STATUS" -ge 400 ]; then
  echo "Failed to deploy nachocode developer hub."
  exit 1
fi


echo "Nacho Developer Hub was executed."
