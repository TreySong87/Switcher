$git = "C:\Program Files\Git\bin\git.exe"
if (-not (Test-Path $git)) {
    Write-Error "Git executable not found at $git"
    exit 1
}
& $git config --global user.email "you@example.com"
& $git config --global user.name "Your Name"
& $git init
& $git remote rm origin 2>$null
& $git remote add origin https://github.com/TreySong87/Switcher
& $git add .
& $git commit -m "Initial commit"
& $git push --set-upstream origin master -f