# Remove inline IBM Plex Sans font styles from all JS files
$searchPattern = "style={{ fontFamily: 'var(--font-ibm-plex-sans), ""IBM Plex Sans"", sans-serif' }}"
$replacement = ""

# Process all JS files in src
Get-ChildItem -Path "d:\cog-web\cognera-landing-page-v0\src" -Filter "*.js" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match [regex]::Escape($searchPattern)) {
        $newContent = $content -replace [regex]::Escape($searchPattern), $replacement
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
        Write-Host "Updated: $($_.FullName)"
    }
}

Write-Host "IBM Plex Sans style cleanup complete!"
