# Generate Android icons from source image
Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\dusto\.openclaw\workspace\whiskey-tracker\BarrelProofIcon.png"
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
    $destPath = "$resPath\$folder"
    
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, $size, $size)
    $g.Dispose()
    
    $bmp.Save("$destPath\ic_launcher.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save("$destPath\ic_launcher_round.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created icons in $folder ($size x $size)"
}

# Also create for drawable-v24 and drawable
$drawableSize = 108
$drawablePath = "$resPath\drawable-v24"
$bmp = New-Object System.Drawing.Bitmap($drawableSize, $drawableSize)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, 0, 0, $drawableSize, $drawableSize)
$g.Dispose()
$bmp.Save("$drawablePath\ic_launcher_foreground.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Created icon in drawable-v24 ($drawableSize x $drawableSize)"

$src.Dispose()
Write-Host "Done!"
