import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

interface SkeletonProps {
    variant?: "rectangular" | "text" | "rounded" | "circular" | undefined;
    width?: number | string;
    height?: number | string;
    animation?: 'pulse' | 'wave' | false;
  }

  const CustomSkeleton: React.FC<SkeletonProps> = ({ variant = 'rectangular', width, height, animation }) => {
    return (
      <>
      
      <Card>
        <CardMedia component={Skeleton} variant="rectangular" height={200} />
        <CardContent>
          <Skeleton variant={variant} width={width} height={height} animation={animation} style={{ marginBottom: 12 }}  />
          <Skeleton variant={variant} width={width} height={height} animation={animation}  />
        </CardContent>
      </Card>

    <Card>
    <CardMedia component={Skeleton} variant="rectangular" height={200} />
    <CardContent>
      <Skeleton variant={variant} width={width} height={height} animation={animation} style={{ marginBottom: 12 }}  />
      <Skeleton variant={variant} width={width} height={height} animation={animation}  />
    </CardContent>
    </Card>
      </>
    );
  };
  
  export default CustomSkeleton;
  