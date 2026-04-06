# Generate Android app icons from barrel logo PNG
Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\dusto\.openclaw\workspace\whiskey-tracker\app-icon.png"
$resPath = "C:\Users\dusto\.openclaw\workspace\whiskey-tracker\android\app\src\main\res"

# Target sizes for Android mipmaps
$sizes = @{
    "mipmap-mdpi" = 48
    "mipmap-hdpi" = 72
    "mipmap-xhdpi" = 96
    "mipmap-xxhdpi" = 144
    "mipmap-xxxhdpi" = 192
}

$src = [System.Drawing.Image]::FromFile($srcPath)

foreach ($folder in $sizes.Keys) {
    $size = $sizes[$folder]
    $destPath = "$resPath\$folder\ic_launcher.png"
    
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, $size, $size)
    $g.Dispose()
    
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created: $destPath"
}

# Also create round icon variants
foreach ($folder in $sizes.Keys) {
    $size = $sizes[$folder]
    $destPath = "$resPath\$folder\ic_launcher_round.png"
    
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, $size, $size)
    $g.Dispose()
    
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created: $destPath"
}

$src.Dispose()
Write-Host "Done!"
