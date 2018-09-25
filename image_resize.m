
clear all;

imd = 'stimuli/Items/Yogurt Container';

ims = dir([imd '/*.jpg']);

for j = 1:numel(ims)
    im = imread([imd '/' char(ims(j).name)]);
    [h w d] = size(im);
    
%     if mean(mean(mean(im(1:3,1:3,:)))) < 4
%        im = im(16:end-16,16:end-16,:);
%     end
    
    if h>w
        r = 384/h;
    else 
        r = 384/w; 
    end
    
    imr = imresize(im,r);
    imwrite(imr,[imd '/' char(ims(j).name)]);
end