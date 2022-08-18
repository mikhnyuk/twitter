<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Tweet */
class TimelineTweetsResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array<string,mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'message' => $this->message,
            'time' => $this->created_at?->diffForHumans(),
            'liked' => $this?->liked ?? false,
            'likes' => $this->whenCounted(relationship: 'likes', default: 0),
            'replies' => 2,
            'retweets' => 2,

            'user' => TimelineTweetUserResource::make(
                $this->whenLoaded('user')
            ),
        ];
    }
}
